<script lang="ts" setup>
import type { DevelopmentalMilestones } from '~/types';

const props = defineProps<{
    data: DevelopmentalMilestones
}>()
</script>

<template>
    <div class="development_info">
        <div class="development_info__block">
            <h4 class="development_info__block_title">
                Physical development
            </h4>
            <ul class="development_info__block_list">
                <li>{{ data.physical_development }}</li>
            </ul>
        </div>
        <div class="development_info__block">
            <h4 class="development_info__block_title">
                Cognitive development
            </h4>
            <ul class="development_info__block_list">
                <li>{{ data.cognitive_development }}</li>
            </ul>
        </div>
        <div class="development_info__block">
            <h4 class="development_info__block_title">
                Social emotional development
            </h4>
            <ul class="development_info__block_list">
                <li>{{ data.social_emotional_development }}</li>
            </ul>
        </div>
        <div class="development_info__block">
            <h4 class="development_info__block_title">
                Special achievements highlights
            </h4>
            <ul class="development_info__block_list">
                <li>{{ data.special_achievements_highlights }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.development_info {
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
        @apply list-disc list-inside;
    }
}
</style>
