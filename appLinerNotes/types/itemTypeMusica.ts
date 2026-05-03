import {ImageSourcePropType} from 'react-native'

export type ItemTypeMusica = {
    id: number
    titulo: string
    artista: string
    album: string
    duracao: number
    genero: string
    anoLan: number
    capa: ImageSourcePropType
}