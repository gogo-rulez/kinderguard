<script lang="ts" setup>
import { useChildrenDataStore } from '~/stores/childrenData';
const { allChildrenData } = useChildrenDataStore();
const route = useRoute();
const childId = +route.params.childId
const childData = allChildrenData.data.find(childData => childData.id === childId);
console.log('childData', childData)
const activeTabId = ref(1);
const activeClass = (id: number) => {
    return id === activeTabId.value ? 'is-active' : ''
}

</script>

<template>
    <div class="page__header">
        <figure class="page__avatar_figure">
            <img :src="`/avatars/${childData?.basic_information.photo}`" :alt="childData?.basic_information.full_name" class="page__avatar">
        </figure>

        <div class="page__info_wrap">
            <p class="page__child_basic_info">
                <span>Full name:</span>
                {{ childData?.basic_information.full_name }}
            </p>
            <p class="page__child_basic_info">
                <span>Date of birth:</span>
                {{ childData?.basic_information.date_of_birth }}
            </p>
            <p class="page__child_basic_info">
                <span>Gender:</span>
                {{ childData?.basic_information.gender }}
            </p>
            <p class="page__child_basic_info">
                <span>Guardian names:</span>
                <template v-for="name in childData?.basic_information.parent_guardian_names">
                    {{ name }} <br>
                </template>
            </p>
            <p class="page__child_basic_info">
                <span>Contact information:</span>
                <template v-for="contact in childData?.basic_information.contact_information">
                    {{ contact }} <br>
                </template>
            </p>
        </div>

    </div>

    <div class="page__tabs_wrap">
        <button class="page__tab" :class="activeClass(1)" @click="activeTabId = 1">
            Health Information
        </button>
        <button class="page__tab" :class="activeClass(2)" @click="activeTabId = 2">
            Development Milestones
        </button>
        <button class="page__tab" :class="activeClass(3)" @click="activeTabId = 3">
            Incidents Reports
        </button>
        <button class="page__tab" :class="activeClass(4)" @click="activeTabId = 4">
            Parental Communication
        </button>
        <button class="page__tab" :class="activeClass(5)" @click="activeTabId = 5">
            Daily Activity
        </button>
    </div>

    <div class="page__tab_content">
        <ChildHealthInformation
            v-if="activeTabId === 1"
            :data="childData?.health_medical_information"
        />
        <ChildDevelopmentMilestones
            v-if="activeTabId === 2"
            :data="childData?.developmental_milestones"
        />
        <ChildIncidentsReports
            v-if="activeTabId === 3"
            :data="childData?.incidents_reports"
        />
        <ChildParentalCommunication
            v-if="activeTabId === 4"
            :data="childData?.parental_communication"
        />
        <ChildDailyActivity
            v-if="activeTabId === 5"
            :data="childData?.daily_activity_logs"
        />
    </div>
</template>

<style lang="scss" scoped>
.page {
    &__header {
        @apply flex gap-5 pt-10;
    }

    &__avatar_figure {
        @apply w-40 h-40;
    }

    &__avatar {
        @apply w-40 h-40 object-cover rounded-full;
    }

    &__info_wrap {
        @apply flex gap-5 w-[600px] flex-wrap;
    }

    &__child_basic_info {
        @apply flex flex-col gap-2 text-lg leading-tight basis-[calc((100%-40px)/3)] flex-shrink grow-0;

        span {
            @apply text-sm leading-none;
        }
    }

    &__tabs_wrap {
        @apply flex gap-4 my-10;
    }

    &__tab {
        @apply py-1 px-2 appearance-none border border-gray-400 rounded-md bg-transparent text-sm;

        &.is-active {
            @apply bg-gray-400 text-white;
        }
    }
}
</style>
