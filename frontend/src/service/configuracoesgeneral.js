import request from 'src/service/request'

export function ListarConfiguracoesGeneral (params) {
  return request({
    url: '/settingsgeneral/',
    method: 'get',
    params
  })
}

export function AlterarConfiguracaoGeneral (data) {
  return request({
    url: `/settingsgeneral/${data.Key}/`,
    method: 'put',
    data
  })
}
