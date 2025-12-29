// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'User' | 'Admin';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Alert types
export type AlertType = 'Heatwave' | 'Thunderstorm' | 'Heavy Rain' | 'Cyclone' | 'Flood' | 'Other';
export type SeverityLevel = 'Low' | 'Medium' | 'High';

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: AlertType;
  severity: SeverityLevel;
  location: string;
  latitude?: number;
  longitude?: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAlertRequest {
  title: string;
  description: string;
  type: AlertType;
  severity: SeverityLevel;
  location: string;
  latitude?: number;
  longitude?: number;
  startDate: string;
  endDate: string;
}

export interface AlertState {
  alerts: Alert[];
  currentAlert: Alert | null;
  isLoading: boolean;
  error: string | null;
}

// Weather types
export interface CurrentWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  description: string;
  lastUpdated: string;
}

export interface ForecastPrediction {
  date: string;
  temperature: number;
  condition: string;
  precipitationChance: number;
}

// Navigation types
export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Alerts: undefined;
  Settings: undefined;
};

export type AlertStackParamList = {
  AlertsList: undefined;
  AlertDetail: { alertId: string };
  CreateAlert: undefined;
  EditAlert: { alertId: string };
};