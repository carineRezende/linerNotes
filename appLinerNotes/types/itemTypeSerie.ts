import {ImageSourcePropType} from 'react-native'

export type ItemTypeSerie = {
    id: number
    titulo: string
    genero: string
    sinopse: string
    temporadas: number
    anoLan: number
    elenco: string
    poster: ImageSourcePropType
}
