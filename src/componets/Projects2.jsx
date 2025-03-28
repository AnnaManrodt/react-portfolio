import React from 'react';
import '../css/portfolio.css'
function Project({ title, imageUrl, link, iconUrl }) {
    return (
        
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            transition: 'transform 0.3s ease',
        }}>
            <img 
                src={imageUrl} 
                alt={title} 
                style={{ 
                    width: '50%',
                    height: 'auto',
                    borderRadius: '8px',
                }} 
            />
            <div className='title-icon'>
            <h3 style={{ 
                marginTop: '10px',
                fontSize: '1.5rem',
                color: '#1976d2',
            }}>
                
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    {title}
                </a>
            </h3>
            {iconUrl && (
                <a href={iconUrl} target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        alt="GitHub" 
                        style={{width:'24px', height: '24px', marginTop: '15px',marginLeft: '15px'}}
                    />
                </a>
            )}
            </div>
        </div>
    );
}

export default Project;
