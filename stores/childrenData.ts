import data from '~/public/children_data.json';

export const useChildrenDataStore = defineStore('childrenData', () => {
    const allChildrenData = ref(data);
    return { allChildrenData }
})
