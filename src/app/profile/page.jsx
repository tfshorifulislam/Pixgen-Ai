'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const data = authClient.useSession()
    const user = data.data?.user
    console.log(user)
    return (
        <div>
            <Card className='mt-10 shadow-xl flex justify-center items-center'>
                <Avatar>
                    <Avatar.Image

                        alt=''
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />

                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <p>
                    {user?.name}
                </p>
                <p>
                    {user?.email}
                </p>
            </Card>

        </div>
    );
};

export default ProfilePage;