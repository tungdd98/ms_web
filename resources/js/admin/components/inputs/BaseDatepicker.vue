<template>
    <div class="base-datepicker">
        <div
            @click.stop="isVisible = !isVisible"
            :class="['ms-datepicker-input', formClass]"
        >
            <input
                type="text"
                :value="showValue"
                disabled
                :placeholder="placeholder"
            />
            <i class="icon icon-calendar"></i>
        </div>
        <SlideYUpTransition :duration="200">
            <div
                class="ms-calendar"
                v-show="isVisible"
                v-click-outside="closeCalendar"
            >
                <div class="ms-calendar__header">
                    <i
                        class="ms-calendar__arrow icon icon-chevrons-left"
                        @click.prevent="movePrevYear"
                    ></i>
                    <i
                        class="ms-calendar__arrow icon icon-chevron-left"
                        @click.prevent="movePrevMonth"
                    ></i>
                    <span
                        class="ms-calendar__title"
                        @click.prevent="moveThisMonth"
                    >
                        {{ header.label }}
                    </span>
                    <i
                        class="ms-calendar__arrow icon icon-chevron-right"
                        @click.prevent="moveNextMonth"
                    ></i>
                    <i
                        class="ms-calendar__arrow icon icon-chevrons-right"
                        @click.prevent="moveNextYear"
                    ></i>
                </div>
                <div class="ms-calendar__weekdays">
                    <div
                        class="weekday"
                        v-for="weekday in weekdays"
                        :key="weekday.number"
                    >
                        {{ weekday.label }}
                    </div>
                </div>
                <div
                    class="ms-calendar__week"
                    v-for="(week, idx) in weeks"
                    :key="idx"
                >
                    <div
                        class="day"
                        :class="{
                            'day--today': day.isToday,
                            'day--selected': day.isSelected
                        }"
                        v-for="day in week"
                        :key="day.weekdayNumber"
                        @click="selectDay(day)"
                    >
                        {{ day.label }}
                    </div>
                </div>
            </div>
        </SlideYUpTransition>
    </div>
</template>

<script>
const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const _weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const _monthLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const _today = new Date();
const _todayComps = {
    year: _today.getFullYear(),
    month: _today.getMonth() + 1,
    day: _today.getDate()
};
import { SlideYUpTransition } from "vue2-transitions";
export default {
    name: "base-datepicker",
    components: {
        SlideYUpTransition
    },
    props: {
        value: {
            type: [Date, String, Object]
        },
        placeholder: {
            type: String,
            default: "Select date"
        },
        formClass: {
            type: [String, Object]
        }
    },
    data() {
        return {
            month: _todayComps.month,
            year: _todayComps.year,
            isVisible: false
        };
    },
    computed: {
        monthIndex() {
            return this.month - 1;
        },
        months() {
            return _monthLabels.map((month, index) => ({
                label: month,
                number: index + 1
            }));
        },
        weekdays() {
            return _weekdayLabels.map((day, index) => ({
                label: day,
                number: index + 1
            }));
        },
        header() {
            const month = this.months[this.monthIndex];
            return {
                month,
                year: this.year.toString(),
                shortYear: this.year.toString().substring(2, 4),
                label: `${month.label} ${this.year}`
            };
        },
        firstWeekdayInMonth() {
            return new Date(this.year, this.monthIndex, 1).getDay() + 1;
        },
        daysInMonths() {
            const isFebruary = this.month === 2;
            const isLeapYear =
                (this.year % 4 === 0 && this.year % 100 !== 0) ||
                this.year % 400 === 0;
            if (isFebruary && isLeapYear) {
                return 29;
            }

            return _daysInMonths[this.monthIndex];
        },
        weeks() {
            const weeks = [];
            let monthStarted = false,
                monthEnded = false;
            let monthDay = 0;
            for (let w = 1; w <= 6 && !monthEnded; w++) {
                const week = [];
                for (let d = 1; d <= 7; d++) {
                    if (!monthStarted && d >= this.firstWeekdayInMonth) {
                        monthDay = 1;
                        monthStarted = true;
                    } else if (monthStarted && !monthEnded) {
                        monthDay += 1;
                    }
                    const { month, year } = this;
                    const dayInfo = {
                        label: monthDay ? monthDay.toString() : "",
                        number: monthDay,
                        weekdayNumber: d,
                        weekNumber: w,
                        beforeMonth: !monthStarted,
                        afterMonth: monthEnded,
                        inMonth: monthStarted && !monthEnded,
                        isToday:
                            monthDay === _todayComps.day &&
                            this.month === _todayComps.month &&
                            this.year === _todayComps.year,
                        isFirstDay: monthDay === 1,
                        isLastDay: monthDay === this.daysInMonths,
                        date: new Date(year, month - 1, monthDay + 1)
                    };
                    this.configureDay(dayInfo);
                    week.push(dayInfo);

                    if (
                        monthStarted &&
                        !monthEnded &&
                        monthDay >= this.daysInMonths
                    ) {
                        monthDay = 0;
                        monthEnded = true;
                    }
                }
                weeks.push(week);
            }

            return weeks;
        },
        hasValue() {
            return (
                this.value && typeof new Date(this.value).getTime === "function"
            );
        },
        valueTime() {
            return this.hasValue ? this.value : null;
        },
        showValue() {
            const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            };
            return this.value
                ? new Intl.DateTimeFormat("vi-VN", options).format(
                      new Date(this.value)
                  )
                : "";
        }
    },
    methods: {
        moveThisMonth() {
            this.month = _todayComps.month;
            this.year = _todayComps.year;
        },
        moveNextMonth() {
            if (this.month < 12) {
                this.month++;
            } else {
                this.month = 1;
                this.year++;
            }
        },
        movePrevMonth() {
            if (this.month > 1) {
                this.month--;
            } else {
                this.month = 12;
                this.year--;
            }
        },
        moveNextYear() {
            this.year++;
        },
        movePrevYear() {
            this.year--;
        },
        configureDay(day) {
            day.isSelected = this.formatDate(day.date) === this.valueTime;
        },
        selectDay(day) {
            this.$emit(
                "input",
                day.isSelected ? null : this.formatDate(day.date)
            );
            this.closeCalendar();
        },
        formatDate(date) {
            return date.toISOString().slice(0, 10);
        },
        closeCalendar() {
            this.isVisible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
$max-width: 320px;
$max-height: 640px;
$shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6,
    0 3px 13px rgba(0, 0, 0, 0.08);
$font-size: 14px;
$font-size-title: 18px;
$font-weight-title: 300;
$font-weight-header: 600;
$day: 40px;
$today: #5e72e4;
$selected: #8898aa;
$hover: #e6e6e6;
$white: #fff;
$text-disabled: #8898aa;
.base-datepicker {
    position: relative;
}
.ms-datepicker-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0.75rem;
    height: calc(2em + 0.75rem + 2px);
    color: $text-disabled;
    font-size: $font-size;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background-color: $white;
    user-select: none;
    input {
        border: none;
        background: transparent;
        &::placeholder {
            color: $text-disabled;
        }
    }
}
.ms-calendar {
    position: absolute;
    padding: 10px;
    margin-top: 5px;
    max-height: $max-height;
    max-width: $max-width;
    min-width: $max-width;
    text-align: center;
    font-size: $font-size;
    border-radius: 5px;
    touch-action: manipulation;
    background-color: $white;
    box-shadow: $shadow;
    z-index: 99;
    &__header {
        padding: 12px 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: $font-size-title;
    }
    &__title {
        font-weight: $font-weight-title;
        text-transform: capitalize;
        cursor: pointer;
    }
    &__arrow {
        cursor: pointer;
    }
    &__weekdays {
        display: flex;
        justify-content: space-between;
        height: 30px;
        .weekday {
            flex: 0 0 calc(100% / 7);
            text-align: center;
            text-transform: capitalize;
            font-weight: $font-weight-header;
        }
    }
    &__week {
        display: flex;
        .day {
            flex: 0 0 calc(100% / 7);
            max-width: calc(100% / 7);
            display: flex;
            justify-content: center;
            align-items: center;
            height: $day;
            max-height: $day;
            cursor: pointer;
            border-radius: 50%;
            transition: all 0.1s ease;
            &:hover {
                background-color: $hover;
            }
            &--today {
                background-color: $today;
                color: $white;
            }
            &--selected {
                background-color: $selected;
                color: $white;
            }
        }
    }
}
</style>
