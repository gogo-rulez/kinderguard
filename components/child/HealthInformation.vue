<script lang="ts" setup>
import type { HealthMedicalInformation } from '~/types';

const props = defineProps<{
    data: HealthMedicalInformation
}>()
</script>

<template>
    <div class="health_info">
        <div class="health_info__block">
            <h4 class="health_info__block_title">
                Allergies
            </h4>
            <ul class="health_info__block_list">
                <li v-for="item in data.allergies">{{ item }}</li>
            </ul>
        </div>
        <div class="health_info__block">
            <h4 class="health_info__block_title">
                Medical conditions
            </h4>
            <ul class="health_info__block_list">
                <li v-for="item in data.medical_conditions">{{ item }}</li>
            </ul>
        </div>
        <div class="health_info__block">
            <h4 class="health_info__block_title">
                Immunization records
            </h4>
            <ul class="health_info__block_list">
                <li v-for="item in data.immunization_records">{{ item }}</li>
            </ul>
        </div>
        <div class="health_info__block">
            <h4 class="health_info__block_title">
                Special dietary requirements
            </h4>
            <ul class="health_info__block_list">
                <li v-for="item in data.special_dietary_requirements">{{ item }}</li>
            </ul>
        </div>
        <div class="health_info__block health_info__block--full_width">
            <h4 class="health_info__block_title">
                Emergency contact information
            </h4>
            <p class="health_info__block_text">
                {{ data.emergency_contact_information.name }}<br>{{ data.emergency_contact_information.relationship }}<br>{{ data.emergency_contact_information.phone_number }}
            </p>
        </div>
        <div class="health_info__block health_info__block--full_width">
            <h4 class="health_info__block_title">
                Physician contact information
            </h4>
            <p class="health_info__block_text">
                {{ data.physician_contact_information.name }}<br>{{ data.physician_contact_information.phone_number }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.health_info {
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
