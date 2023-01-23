import Head from 'next/head';
import { Roboto } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Typography from '@mui/material/Typography';
import { SandwichCard } from '@/components/SandwichCard';

const inter = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandwich Shop</title>
        <meta name="description" content="Same hour shipping sandwich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Typography variant="h1">Sandwich Shop</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <SandwichCard
              name="Ham and Cheese"
              description="Finger licking good"
              photoUrl="https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SandwichCard
              name="Seafood"
              description="Taste of the ocean"
              photoUrl="https://plus.unsplash.com/premium_photo-1664478250378-4afecb3f977c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
