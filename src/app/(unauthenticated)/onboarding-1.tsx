import React from "react"
import { router } from "expo-router"

import OnboardingLayout from "@/components/OnboardingLayout"
import FeatureShowcase from "@/components/FeatureShowcase"

export default function Onboarding1Screen() {
  const handleNext = () => {
    router.push("/(unauthenticated)/onboarding-2")
  }

  return (
    <OnboardingLayout
      headline="Managing your money has never been so easy."
      currentPage={0}
      totalPages={3}
      onNext={handleNext}
    >
      <FeatureShowcase type="account" />
    </OnboardingLayout>
  )
}
