import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import { fourStyles } from "../../components/404Style";

const Page404 = () => {
  const theme = useTheme();
  const fourStyle = fourStyles(theme);

  const router = useRouter()

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/')
    }, 10000)
  },[])

  return (
    <div style={fourStyle.container404}>
      Opps.
      <h1 style={fourStyle.header404}>The page you are looking for does not exists.</h1>
      <p>
        If you want to return home page
      </p>
      <Link href={'/'} >
        <a style={fourStyle.button404}>Click here</a>
      </Link>
      <p> If you do not click the return home page button page will redirect you to home page in 10 seconds</p>
    </div>
  )
}

export default Page404;
