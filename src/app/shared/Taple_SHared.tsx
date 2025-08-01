'use client'
import React, { useState } from 'react'
import { View, Edit, Delete, MoreHorizontal } from 'lucide-react'
import './taple.css'

interface TableSharedProps {
  rows: any[]
  T_Head: string[]
  funView?: (item: unknown) => void
  funEdit?: (item: unknown) => void
  funDelete?: (item: unknown) => void
}

const TableShared: React.FC<TableSharedProps> = ({ rows = [], T_Head, funView, funEdit, funDelete }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  const truncateColumns = ['max_students', '_id', 'instructor', 'students']

  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: '0 auto' }}>
      {/* Desktop  */}
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
                {T_Head.map((header, index) => (
                  <th key={index} style={{
                    padding: '16px 24px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    letterSpacing: '0.025em'
                  }}>
                    {header}
                  </th>
                ))}
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
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  {T_Head.map((column, colIndex) => (
                    <td key={colIndex} style={{
                      padding: '16px 24px',
                      whiteSpace: 'nowrap'
                    }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#111827',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {truncateColumns.includes(column) 
                          ? String(item[column] || '').substring(0, 3) 
                          : item[column] || '—'}
                      </div>
                    </td>
                  ))}
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                      onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px #3b82f6')}
                      onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
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
                            {typeof funView === 'function' && (
                              <button
                                onClick={() => {
                                  funView(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <View style={{ width: '16px', height: '16px' }} />
                                View
                              </button>
                            )}
                            {typeof funEdit === 'function' && (
                              <button
                                onClick={() => {
                                  funEdit(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <Edit style={{ width: '16px', height: '16px' }} />
                                Edit
                              </button>
                            )}
                            {typeof funDelete === 'function' && (
                              <button
                                onClick={() => {
                                  funDelete(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <Delete style={{ width: '16px', height: '16px' }} />
                                Delete
                              </button>
                            )}
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

      {/* Mobile */}
      <div className="Mopilee">
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
                    {item.name || 'Unnamed'}
                  </h3>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
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
                            {typeof funView === 'function' && (
                              <button
                                onClick={() => {
                                  funView(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <View style={{ width: '16px', height: '16px' }} />
                                View
                              </button>
                            )}
                            {typeof funEdit === 'function' && (
                              <button
                                onClick={() => {
                                  funEdit(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <Edit style={{ width: '16px', height: '16px' }} />
                                Edit
                              </button>
                            )}
                            {typeof funDelete === 'function' && (
                              <button
                                onClick={() => {
                                  funDelete(item)
                                  closeDropdown()
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
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              >
                                <Delete style={{ width: '16px', height: '16px' }} />
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {T_Head.map((column, colIndex) => (
                    <div key={colIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>{column}:</span>
                      <span style={{
                        fontSize: '14px',
                        color: '#111827',
                        fontWeight: '500',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '200px'
                      }}>
                        {truncateColumns.includes(column) 
                          ? String(item[column] || '').substring(0, 3) 
                          : item[column] || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {rows.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{ color: '#6b7280', fontSize: '14px' }}>No data available</div>
        </div>
      )}
    </div>
  )
}

export default TableShared