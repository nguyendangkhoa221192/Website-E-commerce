# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
# Rails.application.config.assets.precompile += %w(reset.css)

# %w(user login).each do |controller|
#   Rails.application.config.assets.precompile += ["#{controller}.js"]
# end

# Rails.application.config.assets.precompile += [/.*javascripts*\.js/,/.*stylesheets*\.css/]

Rails.application.config.assets.precompile << Proc.new { |path|
if path =~ /\.(css|js)\z/
  full_path = Rails.application.assets.resolve(path).to_s
  app_assets_path = Rails.root.join('app', 'assets').to_s
  if full_path.starts_with? app_assets_path
    puts "including asset: " + full_path
    true
  else
    puts "excluding asset: " + full_path
    false
  end
else
  false
end
}