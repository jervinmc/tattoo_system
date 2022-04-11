<template>
  <v-sheet color="transparent" >
      <div align="center" class="">
          <register-container />
      </div>
        <div>
            <footer-all />
        </div>
    </v-sheet>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import RegisterContainer from '../../components/register/RegisterContainer.vue'
export default {
  components: { RegisterContainer, FooterAll },

}
</script>

<style>

</style>
x