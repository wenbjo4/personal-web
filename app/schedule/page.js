'use client';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function SchedulePage() {
  // 假設此頁使用 schedule namespace
  const { t } = useTranslation('schedule');
  
  // 範例：行程資料（實際開發可從 API / DB 拉）
  const [schedules, setSchedules] = useState([
    { id: 1, date: '2025-02-10', title: 'Meetup with Team', location: '咖啡廳' },
    { id: 2, date: '2025-02-12', title: 'Design Workshop', location: '線上會議室' },
  ]);

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('pageTitle')}</h1>

      {schedules.length === 0 ? (
        <p>{t('noSchedule')}</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">{t('tableHeader.date')}</th>
              <th className="border p-2">{t('tableHeader.title')}</th>
              <th className="border p-2">{t('tableHeader.location')}</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.id}>
                <td className="border p-2">{schedule.date}</td>
                <td className="border p-2">{schedule.title}</td>
                <td className="border p-2">{schedule.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
