<template>
    <a-breadcrumb>
        <a-breadcrumb-item>{{ formattedPageName }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>
  
<script>
    export default {
        computed: {
            pageName() {
                // Get the route name dynamically, or use a custom name as a fallback
                const routeName = this.$route.name;
                // const customName = 'An Application'; // Replace this with your custom name

                // Replace 'index' with 'Home' and capitalize the first letter
                return routeName === 'index' ? 'Dashboard' : routeName;
            },
            formattedPageName() {
                // Capitalize the first letter of the pageName
                const capitalizedPageName = this.pageName.charAt(0).toUpperCase() + this.pageName.slice(1);

                // Remove dashes and transform into title case
                const withoutDashes = capitalizedPageName.replace(/-/g, ' ');
                const titleCase = withoutDashes.replace(/\w\S*/g, function (word) {
                    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
                });

                return titleCase;
            },
        },
    };
</script>