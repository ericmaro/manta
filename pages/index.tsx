import { LandingDashboard } from "@/components/ui/landing/landing-dashboard";
import { LandingHero } from "@/components/ui/landing/landing-hero";
import LandingNav from "@/components/ui/landing/landing-nav";

export default function Home() {

    return (
        <>
            <LandingNav />
            <LandingHero />
            <LandingDashboard />
        </>);
}