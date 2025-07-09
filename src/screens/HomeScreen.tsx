"use client";
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppLayout from '@/layouts/AppLayout';
import {
  Aboutus,
  Acknowledgment,
  AgeChoose,
  CoachingSchedule,
  Gender,
  HowWouldYouLike,
  MyFutureSelfGoals,
  MyFutureSelfLove,
  Religion,
  ReThinkology,
  StateofRelease,
} from '@/components';

const tabList: Record<string, React.ComponentType<{ onTabChange: (tab: string) => void }>> = {
  Aboutus,
  Acknowledgment,
  AgeChoose,
  CoachingSchedule,
  Gender,
  HowWouldYouLike,
  MyFutureSelfGoals,
  MyFutureSelfLove,
  Religion,
  ReThinkology,
  StateofRelease,
};

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabList>('Aboutus');

  const handleTabChange = (tabName: string) => {
    if (tabList[tabName]) {
      setActiveTab(tabName as keyof typeof tabList);
    }
  };

  const ActiveComponent = tabList[activeTab];

  return (
    <AppLayout>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <ActiveComponent onTabChange={handleTabChange} />
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
