import React from "react"
import { router } from "expo-router"

import OnboardingLayout from "@/components/OnboardingLayout"
import FeatureShowcase from "@/components/FeatureShowcase"

export default function Onboarding2Screen() {
  const handleNext = () => {
    router.push("/(unauthenticated)/onboarding-3")
  }

  return (
    <OnboardingLayout
      headline="Spend smarter every day, all from one app."
      currentPage={1}
      totalPages={3}
      onNext={handleNext}
    >
      <FeatureShowcase type="savings" />
    </OnboardingLayout>
  )
}
