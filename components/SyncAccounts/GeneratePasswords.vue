<template>
  <v-layout align-center >
    <v-container  fluid fill-height>
       <v-layout align-center>
         <v-flex xs12 fluid>
           <v-card class="text-xs-center">
             <v-toolbar round>
         <v-spacer></v-spacer>
         <v-toolbar-title>Sync Phone</v-toolbar-title>
         <v-spacer></v-spacer>
       </v-toolbar>
      <v-img
        src="/password.jpg"
        aspect-ratio="6"
      ></v-img>

      <v-card-title primary-title class="justify-center" >
        <div>
          <h3 class="headline pb-3" ></h3>
        </div>
      </v-card-title>
      <v-layout justify-space-around row fill-height pb-5 wrap>
        <v-flex xs12 sm3 >
          <v-card color="white" >
            <v-toolbar>
                <v-flex headline class="text-xs-center">
                  Password
                </v-flex>
            </v-toolbar>
            <v-layout row wrap align-center justify-center >
          <v-flex ma-3 xs12 class="text-xs-center">
            <qrcode-vue :value="qrobject" :size="size"></qrcode-vue>
          </v-flex>
        </v-layout>

          </v-card>
        </v-flex>

        <v-flex xs12 sm3 >
          <v-card  >
             <v-toolbar>
               <v-layout row wrap align-center>
                 <v-flex headline class="text-xs-center">
                   Walkthrough Video
                 </v-flex>
               </v-layout>
             </v-toolbar>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn flat color="success" v-on:click="submit">Check for Sync</v-btn>
      <v-flex  text-xs-center xs1 align-center pb-2>
      <v-layout justify-space-around>
      <v-icon large color='secondary'>help</v-icon>
      </v-layout>
      </v-flex>
    </v-card>
         </v-flex>
       </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'FirstSync',
  components: {
    QrcodeVue
  },
  data () {
    return {
      size: 220,
      codedObject: {}
    }
  },
  methods: {
    submit () {

    }
  },
  computed: {
    qrobject: function () {
      let codestuff = {}
      codestuff['iden'] = this.$store.state.setupInfo.publicInfo.serverIdentity
      codestuff['pass'] = this.$store.state.setupInfo.publicInfo.aesgcmPass
      console.log(codestuff)
      let jsonString = ''
      jsonString = JSON.stringify(codestuff)
      this.codedObject = codestuff
      return jsonString
    }
  }
}
</script>

<style scoped>

</style>
