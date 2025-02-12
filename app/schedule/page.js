'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { parseISO, format } from 'date-fns';

export default function SchedulePage() {
  const { t } = useTranslation('schedule');
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  // 讓開發者可以調整週視圖時間範圍
  const startHour = 8;  // 預設早上 8AM
  const endHour = 22;   // 預設晚上 10PM

  useEffect(() => {
    async function fetchSchedules() {
      try {
        const response = await fetch('/api/schedule');
        const data = await response.json();
        setSchedules(
          data.map(schedule => ({
            id: schedule._id,
            title: schedule.title,
            start: parseISO(schedule.date + 'T' + schedule.startTime),
            end: parseISO(schedule.date + 'T' + schedule.endTime),
          }))
        );
      } catch (error) {
        console.error('載入行程失敗', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSchedules();
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('pageTitle')}</h1>
      {loading ? (
        <p>{t('loading')}</p>
      ) : schedules.length === 0 ? (
        <p>{t('noSchedule')}</p>
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,dayGridMonth',
          }}
          buttonText={{
            today: t('todayButton', '回到本週'),
            week: t('weekView', '週檢視'),
            month: t('monthView', '月檢視'),
          }}
          events={schedules}
          editable={false}
          selectable={false}
          firstDay={1}
          slotMinTime={`${startHour}:00:00`}
          slotMaxTime={`${endHour}:00:00`}
          height="auto"
          allDaySlot={false}
          slotDuration="01:00:00"
          slotLabelInterval="01:00:00"
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            omitZeroMinute: false,
          }}
          eventContent={(info) => {
            const formattedTime = `${format(info.event.start, 'HH:00')} ~ ${format(info.event.end, 'HH:00')}`;
            return (
              <div className="text-xs font-semibold text-center w-full">
                <span className="text-sm block">{formattedTime}</span>
                <span className="block">{info.event.title}</span>
              </div>
            );
          }}
        />
      )}

      {/* 這裡的全域 CSS 只會影響 schedule 頁面 */}
      <style jsx global>{`
        /* 增加週檢視的時間格空間 */
        .fc .fc-timegrid-slot {
          height: 40px !important;
          border-bottom: 0px;
        }
        /* 調整月曆檢視中事件的樣式，讓內容置中 */
        .fc-daygrid-event {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
        }
      `}</style>
    </main>
  );
}
