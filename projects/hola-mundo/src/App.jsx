import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing userName="antoniosarosi" name="Antonio Sarosi" />
            <TwitterFollowCard isFollowing={false} userName="nategentile" name="Nate Gentile" />
        </section>
    )
}