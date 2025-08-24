import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE({ name, control, defaultValue = "", label }) {
    return (
        // <Editor
        // initialValue='default value'
        // init={
        //     {
        //         branding : false,
        //         heigth : 500, 
        //         menubar : true,
        //         plugins : [
        //             'advlist autolink lists link image charmap',
        //             'searchreplace visualblocks code fullscreen',
        //             'insertdatetime media table'
        //         ]
        //     }
        // }
        // />
        <div>
            <div>
                {label && <label>{label}</label>}
            </div>
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) =>
                (
                    <Editor
                        initialValue='default value'
                        init={
                            {
                                // branding: false,
                                initialValue : defaultValue,
                                heigth: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table'
                                ],
                                toolbar : "undo redo | blocks | image | bold italic"
                            }
                        }
                        onEditorChange={onChange}
                    />
                )
                }
            />
        </div>
    )
}