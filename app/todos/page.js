'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const PRIORITY_TAGS = {
  urgent: { label: '緊急', color: 'bg-red-100 text-red-600' },
  important: { label: '重要', color: 'bg-yellow-100 text-yellow-600' },
  normal: { label: '普通', color: 'bg-green-100 text-green-600' }
};

const STORAGE_KEY = 'todos'; // 共用的 storage key

export default function TodosPage() {
  const [todos, setTodos] = useState(() => {
    // 初始化時從 localStorage 讀取數據
    if (typeof window !== 'undefined') {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      if (savedTodos) {
        try {
          return JSON.parse(savedTodos);
        } catch (e) {
          console.error('Error loading todos:', e);
          return [];
        }
      }
    }
    return [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('normal');

  // 當 todos 改變時保存到 localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  // 添加新的待辦事項
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
        priority: selectedPriority
      }
    ]);
    setNewTodo('');
    setSelectedPriority('normal'); // 重置為普通優先級
  };

  // 切換待辦事項狀態
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 刪除待辦事項
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">待辦事項</h1>
        
        {/* 新增待辦事項表單 */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="輸入新的待辦事項..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPlus} />
                新增
              </button>
            </div>
            <div className="flex gap-4">
              {Object.entries(PRIORITY_TAGS).map(([key, { label, color }]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={key}
                    checked={selectedPriority === key}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="hidden"
                  />
                  <span className={`px-3 py-1 rounded ${color} ${selectedPriority === key ? 'ring-2 ring-offset-2' : ''}`}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </form>

        {/* 待辦事項列表 */}
        <div className="space-y-4">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 text-blue-500"
              />
              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
              </span>
              <span className={`px-3 py-1 rounded ${PRIORITY_TAGS[todo.priority].color}`}>
                {PRIORITY_TAGS[todo.priority].label}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-red-500 hover:text-red-700 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faTrashCan} className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 