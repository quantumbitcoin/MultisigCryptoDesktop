<template>
<v-content>
   <v-container  fluid fill-height>
      <v-layout>
        <v-flex xs12 fluid>
          <v-card flat row wrap >
            <v-img
              src="plan.jpg"
              aspect-ratio="5"
            ></v-img>

            <v-card-title primary-title class="justify-center" >
              <div>
                <h1 >Confirm Final Plan</h1>
              </div>
            </v-card-title>

            <LaptopAndHardware v-bind:choiceArray=choiceArray v-on:pickOption='choose($event)'>
            </LaptopAndHardware>
            <v-flex  text-xs-center xs1 align-center pb-2>
            <v-layout justify-space-around>
            <v-icon large color='secondary' @click.native="back()">arrow_back</v-icon>
            <v-icon large color='secondary'>help</v-icon>
            </v-layout>
            </v-flex>
              </v-card>
            </v-flex>

      </v-layout>

   </v-container>
</v-content>
</template>

<script>
import LaptopAndHardware from '~/components/TheSetupElement/DeviceInfo/LaptopAndHardware.vue'
export default {
  name: 'FinalPlan',
  components: {
    LaptopAndHardware
  },
  props: ['choiceArray'],
  methods: {
    choose (option) {
      this.$emit('pickOption', option)
    },
    back (option) {
      this.$emit('back')
    }

  },
  data: function () {
    return {
      laptops: {}
    }
  }

}
</script>

<style scoped>

</style>
