import dynamic from 'next/dynamic'
export const HomeAirdrops =dynamic(() => import('./HomeAirdrop/HomeAirdrops'))
export const HeroSection = dynamic(() => import('./HeroSection/HeroSection'));
export const HomeArticles = dynamic(() => import('./HomeNews/HomeArticles'))
export const Snippets = dynamic(() => import('./Snippets/Snippets'))
export const ArticleDetails = dynamic(() => import('./ArticleDetails/ArticleDetails'), { ssr: false })
export const OpenSourceSection = dynamic(() => import('./OpenSourceSection/OpenSourceSection'))
export const HeroPage = dynamic(() => import('./HeroPage/HeroPage'));
