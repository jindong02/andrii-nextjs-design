import React, { useEffect, useState } from "react";
import Link from 'next/link'

const ButtonGroup = ({type} : {type?: string}) => {

    const [filter, setFilter] = useState<string>('');

    const changeFilter = (type: string) => {
        setFilter(type);
    }

    useEffect(() => {
        if(type && type !== ''){
            setFilter(type);
        }
    }, [])
    
    return (
        <div className="fixed bottom-0 pb-[30px]">
            <div className="bg-gradient-to-b from-[#333333] via-[#555555] to-[#333333] h-[52px] justify-center items-center align-conter pt-[15px] pl-[1px] pr-[1px] rounded-[14px] shadow-[0_0_2px_2px_rgba(200,200,200,0.1)]">
                <ul>
                    <li className="inline">
                        <Link href="/inspiration?type=all" className={`${filter === 'inspiration' ? 'bg-gradient-to-b from-[#333333] via-[#555555] to-[#333333] hover:from-[#555555] hover:via-[#333333] hover:to-[#555555] text-white' : 'bg-gradient-to-b from-[#FFFFFF] to-[#888888] hover:from-[#FFFFFF] hover:via-[#888888] hover:to-[#FFFFFF]'} inline p-4 rounded-tl-[12px] rounded-bl-[12px]`}>Inspiration</Link>
                    </li>
                    <li className="inline">
                        <Link href="/talent" className={`${filter === 'talent' ? 'bg-gradient-to-b from-[#333333] via-[#555555] to-[#333333] hover:from-[#555555] hover:via-[#333333] hover:to-[#555555] text-white' : 'bg-gradient-to-b from-[#FFFFFF] to-[#888888] hover:from-[#FFFFFF] hover:via-[#888888] hover:to-[#FFFFFF]'} inline p-4`}>Find talent</Link>
                    </li>
                    <li className="inline">
                        <Link href="/learn" className={`${filter === 'learn' ? 'bg-gradient-to-b from-[#333333] via-[#555555] to-[#333333] hover:from-[#555555] hover:via-[#333333] hover:to-[#555555] text-white' : 'bg-gradient-to-b from-[#FFFFFF] to-[#888888] hover:from-[#FFFFFF] hover:via-[#888888] hover:to-[#FFFFFF]'} inline p-4 rounded-tr-[12px] rounded-br-[12px]`}>Learn Design</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ButtonGroup;