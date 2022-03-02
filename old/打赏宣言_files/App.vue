<template>
  <div id="app">
    <ul>
        <li v-for="user in users" :key="user.id"> {{user.name}} </li>
    </ul>
  </div>
</template>

<script>
        import chatData from "./sample-chat-data.json";
        export default {
            data() {
                return {
                    users: chatData,
                };
            },
        };
</script>