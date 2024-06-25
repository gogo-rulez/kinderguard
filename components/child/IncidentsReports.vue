<script lang="ts" setup>
import type { IncidentReport } from '~/types';

const props = defineProps<{
    data: IncidentReport[]
}>()
</script>

<template>
    <div class="incidents_info">
        <div class="incidents_info__block incidents_info__block--full_width">
            <h4 class="incidents_info__block_title">
                Incidents
            </h4>
            <ul class="incidents_info__block_list">
                <li v-for="item in data">
                    Date: {{ item.date }}
                    <br>
                    Description: {{ item.description }}
                    <br>
                    Action taken: {{ item.action_taken }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.incidents_info {
    @apply flex gap-x-20 gap-y-10 flex-wrap;

    &__block {
        @apply flex-shrink-0;

        &--full_width {
            @apply w-full grow;
        }
    }

    &__block_title {
        @apply text-lg;
    }
    &__block_list {
        @apply  list-inside;
    }
}
</style>
