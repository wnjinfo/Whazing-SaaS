import { format, parseISO, parseJSON } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['mensagensTicket', 'ticketFocado', 'hasMore'])
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    scrollToBottom () {
      setTimeout(() => {
        this.$root.$emit('scrollToBottomMessageChat')
      }, 200)
    },
    dataInWords (date) {
      return format(parseJSON(date), 'HH:mm', { locale: pt })
    },
    formatarMensagemWhatsapp (body) {
      if (!body) return
      let format = body
      function is_aplhanumeric (c) {
        var x = c.charCodeAt()
        return !!(((x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57)))
      }
      function whatsappStyles (format, wildcard, opTag, clTag) {
        var indices = []
        for (var i = 0; i < format.length; i++) {
          if (format[i] === wildcard) {
            // eslint-disable-next-line no-unused-expressions
            if (indices.length % 2) { (format[i - 1] == ' ') ? null : ((typeof (format[i + 1]) == 'undefined') ? indices.push(i) : (is_aplhanumeric(format[i + 1]) ? null : indices.push(i))) } else { (typeof (format[i + 1]) == 'undefined') ? null : ((format[i + 1] == ' ') ? null : (typeof (format[i - 1]) == 'undefined') ? indices.push(i) : ((is_aplhanumeric(format[i - 1])) ? null : indices.push(i))) }
          } else {
            // eslint-disable-next-line no-unused-expressions
            (format[i].charCodeAt() == 10 && indices.length % 2) ? indices.pop() : null
          }
        }
        // eslint-disable-next-line no-unused-expressions
        (indices.length % 2) ? indices.pop() : null
        var e = 0
        indices.forEach(function (v, i) {
          var t = (i % 2) ? clTag : opTag
          v += e
          format = format.substr(0, v) + t + format.substr(v + 1)
          e += (t.length - 1)
        })
        return format
      }
      format = whatsappStyles(format, '_', '<i>', '</i>')
      format = whatsappStyles(format, '*', '<b>', '</b>')
      format = whatsappStyles(format, '~', '<s>', '</s>')
      format = format.replace(/\n/gi, '<br>')
      return format
    },
    formatarBotaoWhatsapp(body) {
      if (!body) return
      const format = body

      function is_alphanumeric(c) {
        var x = c.charCodeAt()
        return !!(((x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57)))
      }

      const whatsappStyles = (format, wildcard, opTag, clTag) => {
        var indices = []
        try {
          for (var i = 0; i < format.length; i++) {
            if (format[i] === wildcard) {
              if (indices.length % 2) {
                (format[i - 1] == ' ') ? null : ((typeof (format[i + 1]) == 'undefined') ? indices.push(i) : (is_alphanumeric(format[i + 1]) ? null : indices.push(i)))
              } else {
                (typeof (format[i + 1]) == 'undefined') ? null : ((format[i + 1] == ' ') ? null : (typeof (format[i - 1]) == 'undefined') ? indices.push(i) : ((is_alphanumeric(format[i - 1])) ? null : indices.push(i)))
              }
            } else {
              (format[i].charCodeAt() == 10 && indices.length % 2) ? indices.pop() : null
            }
          }
          (indices.length % 2) ? indices.pop() : null
          var e = 0
          indices.forEach(function (v, i) {
            var t = (i % 2) ? clTag : opTag
            v += e
            format = format.substr(0, v) + t + format.substr(v + 1)
            e += (t.length - 1)
          })
        } catch (error) {
          console.error('Erro ao aplicar estilos do WhatsApp:', error)
        }
        return format
      }

      try {
        // Quebra o body em linhas
        const linhas = body.trim().split('\n')
        const tituloDescricao = linhas.shift() + '\n' // Primeira linha é o título
        const botoes = linhas.filter(btn => btn.trim() !== '').map(btn => {
          return `<button style="display: inline-block; margin: 5px; padding: 10px; background-color: #0084ff; color: white; border: none; border-radius: 5px;" title="Esse botão só é clicável no celular">➡️ ${btn.trim()}</button>`
        })
        let formatado = [tituloDescricao, ...botoes].join('\n')
        formatado = whatsappStyles(formatado, '_', '<i>', '</i>')
        formatado = whatsappStyles(formatado, '*', '<b>', '</b>')
        formatado = whatsappStyles(formatado, '~', '<s>', '</s>')
        formatado = formatado.replace(/\n/gi, '<br>')
        return formatado
      } catch (error) {
        console.error('Erro ao formatar botão do WhatsApp:', error)
        return body
      }
    },
    formatarData (data, formato = 'dd/MM/yyyy') {
      return format(parseISO(data), formato, { locale: pt })
    }
  }
}
