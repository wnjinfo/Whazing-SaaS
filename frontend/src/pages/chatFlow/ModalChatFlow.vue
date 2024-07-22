<template>
  <q-dialog
    :value="modalChatFlow"
    @hide="fecharModal"
    @show="abrirModal"
    persistent
  >
    <q-card
      class="q-pa-lg modal-container container-rounded-10"
    >
    <q-card-actions
        align="right"
        class="q-mt-md"
      >
        <q-btn
          color="negative"
          v-close-popup
          icon="eva-close"
          flat
        />
      </q-card-actions>
      <q-card-section>
        <div class="text-h6 text-center font-family-main">{{ chatFlow.isDuplicate ? 'Duplicar' : chatFlowEdicao.id ? 'Editar': 'Criar' }} Fluxo <span v-if="chatFlow.isDuplicate"> (Nome: {{ chatFlowEdicao.name }}) </span></div>

      </q-card-section>
      <q-card-section class="q-pa-lg container-border container-rounded-10">

        <div class="text-h6 font-family-main q-mb-sm">
          Informações
        </div>

        <q-input
          rounded
          class="row col"
          outlined
          v-model="chatFlow.name"
          label="Descrição"
        />
        <!-- <div class="row col q-mt-md">
          <q-option-group
            v-model="chatFlow.action"
            :options="options"
            color="primary"
          />
        </div> -->
        <div class="row col q-mt-md">
          <q-checkbox
            v-model="chatFlow.isActive"
            label="Ativo"
          />
        </div>
        <div class="row col q-mt-md">
          <q-input
            clearable
            class="full-width"
            rounded
            outlined
            v-model="chatFlow.celularTeste"
            label="Número para Teste"
            hint="Deixe limpo para que a Auto resposta funcione. Caso contrário, irá funcionar somente para o número informado aqui."
          />
        </div>
      </q-card-section>
      <q-card-actions
        align="right"
        class="q-mt-md"
      >
        <q-btn
          label="Cancelar"
          color="negative"
          v-close-popup
          class="q-mr-md btn-rounded-50"
        />
        <q-btn
          label="Salvar"
          @click="handleAutoresposta"
          class="generate-button btn-rounded-50"
          icon="eva-save-outline"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
const userId = +localStorage.getItem('userId')
import { CriarChatFlow, UpdateChatFlow } from 'src/service/chatFlow'
import { getDefaultFlow } from 'src/components/ccFlowBuilder/defaultFlow'

export default {
  name: 'ModalNovoChatFlow',
  props: {
    modalChatFlow: {
      type: Boolean,
      default: false
    },
    chatFlowEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  data () {
    return {
      chatFlow: {
        name: null,
        userId,
        celularTeste: null,
        isActive: true
      }
      // options: [
      //   { value: 0, label: 'Entrada (Criação do Ticket)' },
      //   { value: 1, label: 'Encerramento (Resolução Ticket)' }
      // ]
    }
  },
  methods: {
    abrirModal () {
      if (this.chatFlowEdicao.id) {
        this.chatFlow = {
          ...this.chatFlowEdicao,
          userId
        }
      } else {
        this.chatFlow = {
          name: null,
          action: 0,
          userId,
          celularTeste: null,
          isActive: true
        }
      }
    },
    fecharModal () {
      this.chatFlow = {
        name: null,
        action: 0,
        userId,
        celularTeste: null,
        isActive: true
      }
      this.$emit('update:chatFlowEdicao', { id: null })
      this.$emit('update:modalChatFlow', false)
    },
    async handleAutoresposta () {
      if (this.chatFlow.id && !this.chatFlow?.isDuplicate) {
        const { data } = await UpdateChatFlow(this.chatFlow)
        this.$notificarSucesso('Fluxo editado.')
        this.$emit('chatFlow:editado', data)
      }
      if (!this.chatFlow.id && !this.chatFlow?.isDuplicate) {
        const flow = { ...getDefaultFlow(), ...this.chatFlow, id: null }
        const { data } = await CriarChatFlow(flow)
        this.$notificarSucesso('Novo fluxo criado.')
        this.$emit('chatFlow:criada', data)
      }
      // else {
      //   console.log(this.chatFlow)
      //   console.log(this.chatFlow.isDuplicate)
      //   // setar id = null para rotina de duplicação de fluxo
      //   const flow = { ...getDefaultFlow(), ...this.chatFlow, id: null }
      //   const { data } = await CriarChatFlow(flow)
      //   this.$notificarSucesso('Novo fluxo criado.')
      //   this.$emit('chatFlow:criada', data)
      // }
      this.fecharModal()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
