<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center" @click="$router.push({ name: 'Home' })">
        <v-img
          alt="Logo"
          class="shrink mt-1"
          contain
          min-width="100"
          max-width="100"
          :src="require('@/assets/logo_white.png')"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/Karrynana/dsms_front"
        target="_blank"
        text
      >
        <v-icon left>mdi-github</v-icon>Github
      </v-btn>
      <LoginBox/>
      
    </v-app-bar>

    <v-main>
      <v-container v-if="$route.name !== 'Home'">
        <router-view></router-view>
      </v-container>
      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

