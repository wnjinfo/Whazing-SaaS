<template>
  <div class="text-caption text-center bg-grey-1 q-pa-sm">
    <q-badge align="middle"
      color="primary">
      Seu plano vence dia {{ duedate }}!
    </q-badge>
  </div>
</template>
<script>
import { MostrarVencimento } from 'src/service/empresas'
import { format, parseISO } from 'date-fns'
export default {
  name: 'Vencimento',
  data () {
    return {
      duedate: null
    }
  },
  methods: {
    async listarDate () {
      const { data } = await MostrarVencimento()
      this.duedate = format(parseISO(data.dueDate), 'dd/MM/yyyy')
    }
  },
  mounted () {
    this.listarDate()
  }
}
</script>
<style>

</style>
