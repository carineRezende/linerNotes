import {ImageSourcePropType} from 'react-native';

export type ItemTypeLivro = {
    id: number
    titulo: string
    autores: string
    editora: string
    anoLan: number
    genero: string
    sinopse: string
    capa: ImageSourcePropType
}