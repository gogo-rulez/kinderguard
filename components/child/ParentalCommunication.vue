<script lang="ts" setup>
const props = defineProps<{
    data: object
}>()
</script>

<template>
    <div class="parental_info">
        <div class="parental_info__block parental_info__block--full_width">
            <h4 class="parental_info__block_title">
                Parental Communication
            </h4>
            <ul class="parental_info__block_list">
                <li v-for="item in data">
                    Date: {{ item.date }}
                    <br>
                    Message: {{ item.message }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.parental_info {
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
