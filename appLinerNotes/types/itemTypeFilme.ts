import {ImageSourcePropType} from 'react-native';

export type ItemTypeFilme = {
    id: number
    titulo: string
    genero: string
    sinopse: string
    duracao: number
    anoLan: number
    diretor: string
    elenco: string
    poster: ImageSourcePropType
}