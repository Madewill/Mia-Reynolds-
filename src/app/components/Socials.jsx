import Link from 'next/link';

import {
    RiYoutubeFill,
    RiInstagramFill,
    RiSpotifyFill,
    RiSoundcloudFill,
} from 'react-icons/ri';

const socials = [
    {
        Path: '#',
        icon: <RiYoutubeFill />
    },
    {
        Path: '#',
        icon: <RiInstagramFill />
    },
    {
        Path: '#',
        icon: <RiSpotifyFill />
    },
    {
        Path: '#',
        icon: <RiSoundcloudFill />
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.Path} key={index}>
                        <div className={`${iconStyles}`}>
                            {item.icon}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
