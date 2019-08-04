import React from 'react';

// props - read only object with attribute from parent
export default function HelloWorld(props) {
    return (
        <div>
            <h1>
                <strong>
                    <u>
                        {
                            props.message['hello']
                        }
                    </u>
                </strong>
            </h1>
        </div>
    )
}