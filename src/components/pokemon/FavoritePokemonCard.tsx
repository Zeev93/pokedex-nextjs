import { FC } from 'react'
import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
    pokeId: number
}

export const FavoritePokemonCard:FC<Props> = ({pokeId}) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokeId}`)
    }

  return (
    <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavoriteClicked} >
    <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
        width={'100%'}
    />
    </Card>
  )
}
