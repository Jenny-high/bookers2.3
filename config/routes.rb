Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#top'

  get 'home/about' => 'homes#about', as: 'about'  

  resources :books, only: [:index, :show, :edit, :update, :destroy, :create, :new] do
    resources :book_comments, only: [:create, :destroy]
    resource :favorite, only: [:create, :destroy]
  end

  resources :users, only: [:show, :edit, :update, :index]
end