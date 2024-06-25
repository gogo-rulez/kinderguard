<script lang="ts" setup>
const props = defineProps<{
    data: object
}>()
</script>

<template>
    <div class="daily_activity_info">
        <div v-for="item in data"  class="daily_activity_info__block">
            <div class="daily_activity_info__date">
                <small>Date</small>
                <p>{{ item.date }}</p>
            </div>
            <div class="daily_activity_info__attendance">
                <small>Attendance</small>
                <p>{{ item.attendance_status }}</p>
            </div>
            <div class="daily_activity_info__meals">
                <small>Meals</small>
                <p>Breakfest: {{ item.meals.breakfast }}</p>
                <p>Lunch: {{ item.meals.lunch }}</p>
                <p>Snacks: {{ item.meals.snacks }}</p>
            </div>
            <div class="daily_activity_info__nap_time">
                <small>Nap time</small>
                <p>Start: {{ item.nap_times.start_time }}</p>
                <p>End: {{ item.nap_times.end_time }}</p>
            </div>
            <div class="daily_activity_info__activities">
                <small>Activities</small>
                <ul>
                    <li v-for="activity in item.activities">
                        {{ activity }}
                    </li>
                </ul>
            </div>
            <div class="daily_activity_info__mood_behavior">
                <small>Mood / behavior</small>
                <p>{{ item.mood_behavior }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.daily_activity_info {
    @apply flex gap-x-20 flex-wrap;

    &__block {
        @apply grid grid-cols-2 grid-rows-3-auto gap-x-10 gap-y-5;

        &--full_width {
            @apply w-full grow;
        }
    }

    &__block_title {
        @apply text-lg;
    }
    &__block_list {
        @apply  list-inside;

        li {

        }
    }
}
</style>
