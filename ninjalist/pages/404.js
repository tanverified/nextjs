import Link from 'next/link'
import{ useEffect } from 'react'
import {useRouter} from 'next/router';


const Notfound = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            // router.go(-1)
            router.push('/')
        }, 5000);
    },[])

    return ( 
        <div className="not_found">
            <h1>Ooops...</h1>
            <h2>The page you looking not found</h2>
            <h3>Go back to <Link  href="/"><a>Homepage</a></Link> </h3>
        </div>
     );
}
 
export default Notfound;