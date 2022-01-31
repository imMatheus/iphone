import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppGrid from '../components/AppGrid'
import AppSquare from '../components/AppSquare'
import Navbar from '../components/Navbar'
import ScreenWrapper from '../components/ScreenWrapper'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className='bg-gradient-to-br from-teal-400 to-rose-400 text-white h-screen w-screen flex justify-center items-center'>
            <Head>
                <title>iphone app</title>
                <meta name='description' content='a simple iphone simulator' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl'>
                <Image
                    alt='hej'
                    className='absolute inset-0 h-full w-full object-cover'
                    layout='fill'
                    src='/wallpaper-rainbow.jpeg'
                />

                <Navbar />
                <ScreenWrapper>
                    <AppGrid>
                        <AppSquare src='/apps/instagram.png' name='Instagram' />
                        <AppSquare src='/apps/chrome.png' name='Chrome' />
                        <AppSquare
                            src='/apps/clashroyale.png'
                            name='Clash Royale'
                        />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                    </AppGrid>
                    <AppGrid>
                        <AppSquare src='/apps/instagram.png' name='Instagram' />
                        <AppSquare src='/apps/chrome.png' name='Chrome' />
                        <AppSquare
                            src='/apps/clashroyale.png'
                            name='Clash Royale'
                        />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                    </AppGrid>
                    <AppGrid>
                        <AppSquare src='/apps/instagram.png' name='Instagram' />
                        <AppSquare src='/apps/chrome.png' name='Chrome' />
                        <AppSquare
                            src='/apps/clashroyale.png'
                            name='Clash Royale'
                        />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/files.png' name='Files' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/mail.png' name='Mail' />
                        <AppSquare src='/apps/netflix.png' name='Netflix' />
                        <AppSquare src='/apps/reminder.png' name='Reminder' />
                        <AppSquare src='/apps/settings.png' name='Settings' />
                        <AppSquare src='/apps/health.png' name='Health' />
                        <AppSquare src='/apps/snapchat.png' name='Snapchat' />
                        <AppSquare src='/apps/spotify.png' name='Spotify' />
                        <AppSquare src='/apps/twitter.png' name='Twitter' />
                    </AppGrid>
                </ScreenWrapper>
            </div>
        </div>
    )
}

export default Home
