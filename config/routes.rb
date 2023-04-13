Rails.application.routes.draw do
  devise_for :admins,
             controllers: {
                 sessions: 'admins/sessions',
                 registrations: 'admins/registrations'
             }


  resources :safari_itineries
  resources :safaris
  resources :planningforms
  resources :inquiries
  resources :blogs
  resources :day_trips
  resources :cultural_tours
  resources :adventures
  resources :bookings
  resources :itineries
  resources :route_durations
  resources :routes
  resources :mountains

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
