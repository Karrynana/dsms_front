<template>
  <div>
    <v-card>
      <v-card-title>{{ coach.name + ' ' }}教练</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-img :src="$globalData.cosUrl + '/' + coach.photo"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    coach: {
      type: Object,
    },
  },
};
</script>
