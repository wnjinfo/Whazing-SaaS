<template>
  <div>
    <q-list class="text-weight-medium">
      <q-item-label header class="text-bold text-h6 q-mb-lg">Configurações</q-item-label>

      <q-item-label caption class="q-mt-lg q-pl-sm">Módulo: SaaS</q-item-label>
      <q-separator spaced />

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Permitir solicitação de teste</q-item-label>
          <q-item-label caption>Habilitando essa opção poderá ser feito a solicitação de teste automatico</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="allowSignup" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="allowSignup === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('allowSignup')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="allowSignup === 'enabled'">
        <div class="col-12">
          <q-input v-model="timeTest" type="number" autogrow dense outlined
            label="Tempo em dias teste:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('timeTest')" />
        </div>
      </div>

    </q-list>

  </div>
</template>

<script>
import { ListarConfiguracoesGeneral, AlterarConfiguracaoGeneral } from '../../../service/configuracoesgeneral'
export default {
  name: 'ConfiguracoesSaaS',
  data() {
    return {
      configuracoes: [],
      allowSignup: null,
      timeTest: ''
    }
  },
  methods: {
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoesGeneral()
      this.configuracoes = data
      this.configuracoes.forEach(el => {
        const value = el.value
        this.$data[el.key] = value
      })
    },
    async atualizarConfiguracao(key) {
      const params = {
        key,
        value: this.$data[key]
      }
      try {
        await AlterarConfiguracaoGeneral(params)
        this.$q.notify({
          type: 'positive',
          message: 'Configuração alterada!',
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      } catch (error) {
        console.error('error - AlterarConfiguracao', error)
        this.$data[key] = this.$data[key] === 'enabled' ? 'disabled' : 'enabled'
        this.$notificarErro('Ocorreu um erro!', error)
      }
    }
  },
  async mounted() {
    await this.listarConfiguracoes()
  }
}
</script>

<style lang="scss" scoped></style>
