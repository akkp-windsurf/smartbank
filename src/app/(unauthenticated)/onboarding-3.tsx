import React from "react"
import { router } from "expo-router"

import OnboardingLayout from "@/components/OnboardingLayout"
import FeatureShowcase from "@/components/FeatureShowcase"

export default function Onboarding3Screen() {
  return (
    <OnboardingLayout
      headline="Safe and secure international transactions"
      currentPage={2}
      totalPages={3}
    >
      <FeatureShowcase type="multicurrency" />
    </OnboardingLayout>
  )
}
