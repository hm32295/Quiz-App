'use client'
import React, { useState } from 'react';
import { View, Edit, Delete, MoreHorizontal, Heart, X } from 'lucide-react';
import './taple.css'
interface TableSharedProps {
  rows: any[];
  cols?: any[];
  fun1: (item: unknown ) => void;
  fun2: (item: unknown ) => void;
  fun3: (item: unknown ) => void;
}

const TableShared: React.FC<TableSharedProps> = ({ rows = [], cols = [], fun1, fun2, fun3 }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };



  return (
    
    <div style={{
      width: '100%',
      maxWidth: '1280px',
      overflow: 'hidden !important',
      margin: '0 auto',
    
    }}>
      {/* Desktop Table View */}
      <div className="hidden lg:block Desktop">
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', fontSize: '14px' }}>
            <thead style={{
              backgroundColor: '#f9fafb',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <tr>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Name
                </th>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Image
                </th>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Price
                </th>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Description
                </th>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Category
                </th>
                <th style={{
                  padding: '16px 24px',
                  textAlign: 'right',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  letterSpacing: '0.025em'
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e5e7eb'
            }}>
              {rows.map((item, index) => (
                <tr 
                  key={index} 
                  style={{
                    borderBottom: '1px solid #e5e7eb',
                    transition: 'background-color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#111827'
                    }}>
                      {item.name || '—'}
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap'
                  }}>
                    <div style={{
                      flexShrink: 0,
                      height: '48px',
                      width: '48px'
                    }}>
                      {item.image ? (
                        <img 
                          style={{
                            height: '48px',
                            width: '48px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid #e5e7eb'
                          }}
                          src={item.image} 
                          alt={item.name || 'Product'} 
                        />
                      ) : (
                        <div style={{
                          height: '48px',
                          width: '48px',
                          borderRadius: '8px',
                          backgroundColor: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{
                            fontSize: '12px',
                            color: '#6b7280'
                          }}>No Image</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#111827',
                      fontWeight: '500'
                    }}>
                      {item.price || '—'}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#4b5563',
                      maxWidth: '288px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.description || '—'}
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#4b5563'
                    }}>
                      {item.category?.[0]?.name || item.category?.name || '—'}
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap',
                    textAlign: 'right',
                    position: 'relative'
                  }}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        backgroundColor: '#ffffff',
                        transition: 'background-color 0.15s ease-in-out',
                        cursor: 'pointer',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #3b82f6'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                      <MoreHorizontal style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                    </button>
                    
                    {openDropdown === index && (
                      <>
                        <div 
                          style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 10
                          }}
                          onClick={closeDropdown}
                        />
                        <div style={{
                          position: 'absolute',
                          right: 0,
                          top: '40px',
                          width: '192px',
                          backgroundColor: '#ffffff',
                          borderRadius: '8px',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                          border: '1px solid #e5e7eb',
                          zIndex: 20,
                          overflow: 'hidden'
                        }}>
                          <div style={{ padding: '4px 0' }}>
                     
                            <button
                              onClick={() => {
                                fun2(item);
                                closeDropdown();
                              }}
                              style={{
                                width: '100%',
                                padding: '8px 16px',
                                textAlign: 'left',
                                fontSize: '14px',
                                color: '#111827',
                                transition: 'background-color 0.15s ease-in-out',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <Edit style={{ width: '16px', height: '16px' }} />
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                fun3(item);
                                closeDropdown();
                              }}
                              style={{
                                width: '100%',
                                padding: '8px 16px',
                                textAlign: 'left',
                                fontSize: '14px',
                                color: '#111827',
                                transition: 'background-color 0.15s ease-in-out',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <Heart style={{ width: '16px', height: '16px' }} />
                              Fav
                            </button>
                            <button
                              onClick={() => {
                                // Handle delete action
                                closeDropdown();
                              }}
                              style={{
                                width: '100%',
                                padding: '8px 16px',
                                textAlign: 'left',
                                fontSize: '14px',
                                color: '#dc2626',
                                transition: 'background-color 0.15s ease-in-out',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <Delete style={{ width: '16px', height: '16px' }} />
                              Delete
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="Mopilee" >
   <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  {rows.map((item, index) => (
    <div key={index} style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '16px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            paddingRight: '16px'
          }}>
            {item.name || 'Unnamed Product'}
          </h3>
          <div style={{
            position: 'relative',
            flexShrink: 0
          }}>
            <button
              onClick={() => toggleDropdown(index + 1000)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                transition: 'background-color 0.15s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <MoreHorizontal style={{ width: '16px', height: '16px', color: '#6b7280' }} />
            </button>
            {openDropdown === index + 1000 && (
              <>
                <div 
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10
                  }}
                  onClick={closeDropdown}
                />
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '40px',
                  width: '192px',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e5e7eb',
                  zIndex: 20,
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '4px 0' }}>
                    <button
                      onClick={() => {
                        fun1(item);
                        closeDropdown();
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 16px',
                        textAlign: 'left',
                        fontSize: '14px',
                        color: '#111827',
                        transition: 'background-color 0.15s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <View style={{ width: '16px', height: '16px' }} />
                      View
                    </button>
                    <button
                      onClick={() => {
                        fun2(item);
                        closeDropdown();
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 16px',
                        textAlign: 'left',
                        fontSize: '14px',
                        color: '#111827',
                        transition: 'background-color 0.15s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Edit style={{ width: '16px', height: '16px' }} />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        // Handle delete action
                        closeDropdown();
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 16px',
                        textAlign: 'left',
                        fontSize: '14px',
                        color: '#dc2626',
                        transition: 'background-color 0.15s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Delete style={{ width: '16px', height: '16px' }} />
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6b7280'
            }}>ْIMage:</span>
            <div style={{ flexShrink: 0 }}>
              {item.image ? (
                <img 
                  style={{
                    height: '48px',
                    width: '48px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    border: '1px solid #e5e7eb'
                  }}
                  src={item.image} 
                  alt={item.name || 'Product'} 
                />
              ) : (
                <div style={{
                  height: '48px',
                  width: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>Not Found Image</span>
                </div>
              )}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6b7280'
            }}>Price:</span>
            <span style={{
              fontSize: '14px',
              color: '#111827',
              fontWeight: '500'
            }}>{item.price || '—'}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6b7280',
              flexShrink: 0,
              marginRight: '16px'
            }}>Info:</span>
            <span style={{
              fontSize: '14px',
              color: '#4b5563',
              textAlign: 'right',
              maxWidth: '224px'
            }}>{item.description || '—'}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6b7280'
            }}>Description:</span>
            <span style={{
              fontSize: '14px',
              color: '#4b5563'
            }}>{item.category?.[0]?.name || item.category?.name || '—'}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      
      {rows.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px 0'
        }}>
          <div style={{
            color: '#6b7280',
            fontSize: '14px'
          }}>No data available</div>
        </div>
      )}
    </div>
  );
};

export default TableShared;