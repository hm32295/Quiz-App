'use client';
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // same theme as in documentation
import 'primereact/resources/primereact.min.css';                  // core css
import 'primeicons/primeicons.css';                                // icons
import 'primeflex/primeflex.css';                                  // flex utilities

export default function HeadlessDemo({HeadetTitlw ,SecondMessage,funSAVE,CODESH_OW}:any) {
    const toast = useRef(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-check-circle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="headless"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem', backgroundColor: '#f5f5f5', borderRadius: '0.5rem' }}>
                        <div style={{  color:'#000 !important',borderRadius: '50%', backgroundColor: '#000', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '6rem', width: '6rem', marginTop: '-4rem' }}>
                            <i className="pi pi-check text-white text-5xl" style={{color:'#000 !important'  }}></i>
                        </div>
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem', marginTop: '1rem' }} ref={headerRef}>
                            {HeadetTitlw}
                        </span>
                        <span style={{ fontWeight: 'bold', fontSize: '1rem', display: 'block', marginBottom: '0.5rem'}}>
                            {SecondMessage}
                        </span>
                        {/* SHOW __Hidden INPUT COPY CODE */}
                        <div style={CODESH_OW?{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '5px', backgroundColor: 'rgba(255, 237, 223, 1)', borderRadius: '3rem', padding: '10px'} :{ display: 'none' }}>
                            <span style={{  fontSize:'16px',fontWeight:'600'}}>CODE:</span>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
                                <span style={{fontWeight:'700'}}>A123DDS</span>
                                <i
                                    className="pi pi-copy"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        navigator.clipboard.writeText('A123DDS');
                                        toast.current?.show({ severity: 'info', summary: 'Copied', detail: 'Code copied to clipboard', life: 3000 });
                                    }}
                                ></i>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                            <Button
                                label="Save"
                                onClick={(event) => {
                                    funSAVE();
                                    hide(event);
                                    accept();
                                }}
                                style={{ width: '8rem', color: '#fff', backgroundColor: '#000', borderColor: '#0000' }}
                            >
                            </Button>
                            <Button
                                label="Cancel"
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                    reject();
                                }}
                                style={{ width: '8rem', color: '#fff', backgroundColor: '#000', borderColor: '#0000' }}
                            ></Button>
                        </div>
                    </div>
                )}
            />
            <div style={{ backgroundColor: '#fff', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
    
}
//  <Confirmation_suc HeadetTitlw='Quiz joined successfully ' SecondMessage='Python for noobs Quiz one' funSAVE={funSAVE}CODESH_OW={CODESH_OW}/>